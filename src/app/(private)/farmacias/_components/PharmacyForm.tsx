'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckIcon, Loader2, SaveIcon, XIcon } from 'lucide-react'
import { Address, Pharmacy } from '@prisma/client'

import { createPharmacy } from '../_actions.tsx/createPharmacy'
import { Input } from '@/_components/ui/input'
import { Button } from '@/_components/ui/button'
import { ShowToast } from '@/_components/ShowToast'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/_components/ui/form'

interface IPharmacyForm {
  defaultValues?: {
    pharmacy: Pharmacy
    address: Address
  }
}

const pharmacyFormSchema = z.object({
  pharmacy: z.object({
    name: z.string().trim().min(1, 'Nome é obrigatório'),
    imageUrl: z.string().trim().url('URL inválida').optional(),
    phone1: z
      .string()
      .trim()
      .min(1, 'Telefone fixo é obrigatório')
      .length(10, 'Número de telefone inválido'),
    phone2: z.string().trim().optional(),
  }),
  address: z.object({
    street: z.string().trim().min(1, 'Nome da rua/avenida é obrigatório'),
    number: z.string().trim().min(1, 'Número é obrigatório'),
    district: z.string().trim().min(1, 'Bairro é obrigatório'),
    complement: z.string().trim().optional(),
    mapUrl: z
      .string({
        required_error: 'URL do google maps é obrigatória',
      })
      .trim()
      .url('URL inválida'),
  }),
})

function PharmacyForm({ defaultValues }: IPharmacyForm) {
  const form = useForm<z.infer<typeof pharmacyFormSchema>>({
    resolver: zodResolver(pharmacyFormSchema),
    defaultValues: {
      pharmacy: {
        name: defaultValues?.pharmacy.name,
        imageUrl: defaultValues?.pharmacy.imageUrl ?? undefined,
        phone1: defaultValues?.pharmacy.phones[0],
        phone2: defaultValues?.pharmacy.phones[1],
      },
      address: {
        street: defaultValues?.address.street,
        number: defaultValues?.address.number,
        district: defaultValues?.address.district,
        complement: defaultValues?.address.complement ?? undefined,
        mapUrl: defaultValues?.address.mapUrl,
      },
    },
  })

  const onSubmit = async (data: z.infer<typeof pharmacyFormSchema>) => {
    if (!defaultValues) {
      const result = await createPharmacy({
        pharmacy: {
          name: data.pharmacy.name,
          imageUrl: data.pharmacy.imageUrl ?? null,
          phones: [data.pharmacy.phone1, data.pharmacy.phone2 ?? ''],
        },
        address: {
          street: data.address.street,
          number: data.address.number,
          district: data.address.district,
          complement: data.address.complement ?? null,
          mapUrl: data.address.mapUrl,
        },
      })

      if (result) {
        form.reset()

        ShowToast({
          title: 'Farmácia criada com sucesso!',
          icon: <CheckIcon size={14} />,
        })
      } else {
        ShowToast({
          title: 'Não foi possível criar a farmácia!',
          icon: <XIcon size={14} />,
        })
      }
    } else {
      // UPDATE
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-lg bg-muted p-3"
      >
        <fieldset className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="pharmacy.name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o nome da farmácia"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pharmacy.imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="URL da imagem da farmácia"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pharmacy.phone1"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Telefone fixo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pharmacy.phone2"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Telefone celular"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <fieldset className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="address.street"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Avenida..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address.number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Número" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address.district"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Bairro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address.complement"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Complemento" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address.mapUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="URL do google maps"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <Button
          type="submit"
          variant="secondary"
          disabled={form.formState.isSubmitting}
          className="w-fit self-end px-3"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
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

export { PharmacyForm }
