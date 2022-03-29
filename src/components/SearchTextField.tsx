import { InputAdornment, TextField, TextFieldProps, useTheme } from "@mui/material"
import { MagnifyingGlass, XCircle } from "phosphor-react"
import { useRef, useState } from "react"

function SearchTextField({ value, defaultValue, onChange, onBlur, onFocus, ...props }: TextFieldProps) {
  const ref = useRef<HTMLInputElement>()
  const theme = useTheme()
  const [focused, setFocused] = useState(false)
  return (
    <TextField
      {...props}
      inputRef={ref}
      type='search'
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onFocus={(e) => {
        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e) => {
        setFocused(false)
        onBlur?.(e)
      }}
      sx={{
        '& .MuiInputAdornment-root': {
          color: focused ? theme.palette.apes.purplePleasure.main : theme.palette.apes.palladium,

        },
        '.MuiOutlinedInput-input': {
          '&::placeholder': {
            textOverflow: 'ellipsis',
            color: theme.palette.apes.argent,
          },
        },
        '& .MuiInputAdornment': {
          background: 'transparent',
          marginRight: 0,
        },
        '.MuiInputAdornment-positionEnd ': {
          cursor: 'pointer'
        },

        '& .MuiOutlinedInput-root': {
          '&:hover': {
            '& .MuiInputAdornment-root': {
              color: theme.palette.apes.purplePleasure.main
            }
          },
        }

      }}
      InputProps={{
        startAdornment: <InputAdornment position="start"><MagnifyingGlass size={20} /></InputAdornment>,
        endAdornment: (!!value && (
          <InputAdornment position="end" >
            <XCircle size={20} weight="fill"
              onClick={() => {
                // @ts-ignore
                onChange?.({ target: { value: '' } })
                ref.current?.focus()
              }}
            />
          </InputAdornment>
        ))
      }}
    />
  )
}

export default SearchTextField