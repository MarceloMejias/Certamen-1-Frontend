import {
  Box,
  Button,
  Chip,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Skull } from 'lucide-react'
import type { Warrior } from '../types/warrior'
import { warriorCategories } from './warriorCategories'

interface WarriorTableProps {
  warriors: Warrior[]
  onDelete: (warriorId: string) => void
}

function WarriorTable({ warriors, onDelete }: WarriorTableProps) {
  return (
    <section aria-labelledby="troop-table-heading">
      <Typography id="troop-table-heading" component="h2" variant="h6" gutterBottom>
        Despliegue del ejército
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table aria-label="Tropas registradas">
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Guerrero</TableCell>
              <TableCell>Tipo de Guerrero</TableCell>
              <TableCell>Categoría / Rango</TableCell>
              <TableCell align="center">Nivel</TableCell>
              <TableCell align="center">Clasificación</TableCell>
              <TableCell align="right">Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {warriors.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Aún no hay tropas registradas.
                </TableCell>
              </TableRow>
            ) : (
              warriors.map((warrior) => {
                const category = warriorCategories.find(
                  (option) => option.value === warrior.category,
                )
                const CategoryIcon = category?.Icon

                return (
                  <TableRow key={warrior.id} hover>
                    <TableCell component="th" scope="row">
                      {warrior.name}
                    </TableCell>
                    <TableCell>{warrior.type}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                        {CategoryIcon && <CategoryIcon size={18} aria-hidden="true" />}
                        <span>{warrior.category}</span>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1.5,
                          minWidth: 130,
                        }}
                      >
                        <LinearProgress
                          variant="determinate"
                          value={warrior.combatLevel}
                          aria-label={`Nivel de combate: ${warrior.combatLevel} de 100`}
                          sx={{ flex: 1, height: 8, borderRadius: 4 }}
                        />
                        <Typography variant="body2" sx={{ minWidth: 24, textAlign: 'center' }}>
                          {warrior.combatLevel}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label=""
                        aria-label={`Clasificación: ${warrior.type}`}
                        color={warrior.type === 'Orco' ? 'success' : 'error'}
                        size="small"
                        sx={{
                          width: 24,
                          minWidth: 24,
                          height: 24,
                          p: 0,
                          '& .MuiChip-label': { display: 'none' },
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="error"
                        size="small"
                        startIcon={<Skull size={16} />}
                        onClick={() => onDelete(warrior.id)}
                      >
                        Asesinado por la aparición
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default WarriorTable