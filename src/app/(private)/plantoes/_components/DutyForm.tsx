'use client'

import { useEffect, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Duty, Pharmacy } from '@prisma/client'
import { addHours, format } from 'date-fns'
import {
  CalendarIcon,
  CheckIcon,
  Loader2Icon,
  SaveIcon,
  XIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { getIdAndName } from '../_actions/getIdAndName'
import { createDuty } from '../_actions/createDuty'

import { Button } from '@/_components/ui/button'
import { Calendar } from '@/_components/ui/calendar'
import { ShowToast } from '@/_components/ShowToast'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/_components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/_components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/_components/ui/popover'
import { editDuty } from '../_actions/editDuty'

interface IDutyForm {
  id?: string
  defaultValues?: {
    pharmacy: Pick<Pharmacy, 'id'>
    duty: Pick<Duty, 'startAt'>
  }
}

interface IIdAndName {
  id: string
  name: string
}

const dutyFormSchema = z.object({
  pharmacy: z.object({
    id: z.string({ required_error: 'Selecione uma farmácia' }),
  }),
  duty: z.object({
    startAt: z.date({ required_error: 'Seleciona a data do plantão' }),
  }),
})

function DutyForm({ id, defaultValues }: IDutyForm) {
  const [pharmaciesList, setPharmaciesList] = useState<IIdAndName[] | null>(
    null,
  )

  const form = useForm<z.infer<typeof dutyFormSchema>>({
    resolver: zodResolver(dutyFormSchema),
    defaultValues: {
      pharmacy: {
        id: defaultValues?.pharmacy.id,
      },
      duty: {
        startAt: defaultValues?.duty.startAt,
      },
    },
  })

  useEffect(() => {
    const getPharmacies = async () => {
      const pharmacies = await getIdAndName()

      setPharmaciesList(pharmacies)
    }

    getPharmacies()
  }, [])

  const onSubmit = async (data: z.infer<typeof dutyFormSchema>) => {
    if (!id) {
      const start = addHours(data.duty.startAt, 22)
      const end = addHours(start, 9)

      const result = await createDuty({
        duty: {
          startAt: start,
          endAt: end,
          pharmacyId: data.pharmacy.id,
        },
      })

      if (result) {
        ShowToast({
          title: 'Plantão criado com sucesso!',
          icon: <CheckIcon size={14} />,
        })
      } else {
        ShowToast({
          title: 'Não foi possível criar o plantão!',
          icon: <XIcon size={14} />,
        })
      }
    } else {
      const result = await editDuty({
        duty: {
          id,
        },
        pharmacy: {
          id: data.pharmacy.id,
        },
      })

      if (result) {
        ShowToast({
          title: 'Plantão editado com sucesso!',
          icon: <CheckIcon size={14} />,
        })
      } else {
        ShowToast({
          title: 'Não foi possível editar o plantão!',
          icon: <XIcon size={14} />,
        })
      }
    }
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-3 rounded-md bg-muted p-3 lg:grid-cols-[1fr_1fr_120px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="pharmacy.id"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma farmácia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {pharmaciesList?.map((pharmacy, index) => (
                    <SelectItem key={index} value={pharmacy.id}>
                      {pharmacy.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duty.startAt"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'h-full w-full border-none bg-background p-3 text-left font-normal hover:bg-background',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd-MM-yyyy')
                      ) : (
                        <span>Seleciona a data do plantão</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="default"
          disabled={form.formState.isSubmitting}
          className="h-full w-full p-3"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2Icon className="h-4 w-4 animate-spin" />
              Aguarde...
            </>
          ) : (
            <>
              <SaveIcon size={14} /> Salvar
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}

export { DutyForm }
