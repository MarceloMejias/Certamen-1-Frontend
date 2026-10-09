import { useState, type FormEvent } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material'
import {
  UserRoundPlus,
} from 'lucide-react'
import type { NewWarrior, WarriorCategory, WarriorType } from '../types/warrior'
import { warriorCategories } from './warriorCategories'

interface WarriorFormProps {
  onRegister: (warrior: NewWarrior) => void
}

function WarriorForm({ onRegister }: WarriorFormProps) {
  const [form, setForm] = useState<NewWarrior>({
    name: '',
    type: 'Orco',
    combatLevel: 50,
    category: 'Capitán',
    threat: 1,
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onRegister(form)
    setForm((currentForm) => ({
      ...currentForm,
      name: '',
      combatLevel: 50,
      threat: 1,
    }))
  }

  return (
    <Card variant="outlined">
      <CardContent className="p-4">
        <Typography component="h2" variant="h6" gutterBottom>
          Ingresar guerrero
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            <div className="col-12">
              <TextField
                fullWidth
                label="Nombre del Guerrero"
                value={form.name}
                onChange={(event) =>
                  setForm((currentForm) => ({ ...currentForm, name: event.target.value }))
                }
              />
            </div>

            <div className="col-12">
              <FormControl>
                <FormLabel id="warrior-type-label">Tipo de Guerrero</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="warrior-type-label"
                  name="warrior-type"
                  value={form.type}
                  onChange={(event) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      type: event.target.value as WarriorType,
                    }))
                  }
                >
                  <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
                  <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="col-12 col-md-6">
              <FormControl fullWidth>
                <FormLabel id="combat-level-label">
                  Nivel de Combate: {form.combatLevel}
                </FormLabel>
                <Slider
                  aria-labelledby="combat-level-label"
                  min={1}
                  max={100}
                  step={1}
                  value={form.combatLevel}
                  valueLabelDisplay="auto"
                  marks={[{ value: 1, label: '1' }, { value: 100, label: '100' }]}
                  onChange={(_, value) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      combatLevel: typeof value === 'number' ? value : value[0],
                    }))
                  }
                />
              </FormControl>
            </div>

            <div className="col-12 col-md-6">
              <FormControl fullWidth>
                <InputLabel id="warrior-category-label">Categoría / Rango</InputLabel>
                <Select
                  labelId="warrior-category-label"
                  id="warrior-category"
                  value={form.category}
                  label="Categoría / Rango"
                  renderValue={(value) => {
                    const selectedCategory = warriorCategories.find(
                      (option) => option.value === value,
                    )
                    const CategoryIcon = selectedCategory?.Icon

                    return (
                      <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                        {CategoryIcon && <CategoryIcon size={18} aria-hidden="true" />}
                        <span>{selectedCategory?.value}</span>
                      </Box>
                    )
                  }}
                  onChange={(event) =>
                    setForm((currentForm) => ({
                      ...currentForm,
                      category: event.target.value as WarriorCategory,
                    }))
                  }
                >
                  {warriorCategories.map(({ value, Icon }) => (
                    <MenuItem key={value} value={value}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Icon size={18} aria-hidden="true" />
                        <span>{value}</span>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="col-12">
              <FormControl>
                <FormLabel id="threat-rating-label">Nivel de Amenaza / Furia</FormLabel>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Rating
                    aria-labelledby="threat-rating-label"
                    name="threat-rating"
                    value={form.threat}
                    max={5}
                    precision={1}
                    getLabelText={(rating) => `${rating} estrella${rating === 1 ? '' : 's'}`}
                    onChange={(_, value) =>
                      setForm((currentForm) => ({ ...currentForm, threat: value ?? 1 }))
                    }
                  />
                  <Typography variant="body2" color="text.secondary">
                    {form.threat}/5
                  </Typography>
                </Box>
              </FormControl>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <Button
                type="submit"
                variant="contained"
                startIcon={<UserRoundPlus size={18} />}
              >
                Registrar Guerrero
              </Button>
            </div>
          </div>
        </Box>
      </CardContent>
    </Card>
  )
}

export default WarriorForm