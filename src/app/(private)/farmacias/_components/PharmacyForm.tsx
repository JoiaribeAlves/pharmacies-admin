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
import { editPharmacy } from '../_actions.tsx/editPharmacy'

interface IPharmacyForm {
  id?: string
  defaultValues?: {
    pharmacy: Pick<Pharmacy, 'name' | 'imageUrl' | 'phones'>
    address: Pick<
      Address,
      'street' | 'number' | 'district' | 'complement' | 'mapUrl'
    >
  }
}

const pharmacyFormSchema = z.object({
  pharmacy: z.object({
    name: z.string({ required_error: 'Nome é obrigatório' }).trim(),
    imageUrl: z.string().trim().url('URL inválida').optional(),
    phone1: z
      .string({ required_error: 'Telefone fixo é obrigatório' })
      .trim()
      .length(10, 'Número de telefone inválido'),
    phone2: z.string().trim().optional(),
  }),
  address: z.object({
    street: z
      .string({ required_error: 'Nome da rua/avenida é obrigatório' })
      .trim(),
    number: z.string({ required_error: 'Número é obrigatório' }).trim(),
    district: z.string({ required_error: 'Bairro é obrigatório' }).trim(),
    complement: z.string().trim().optional(),
    mapUrl: z
      .string({
        required_error: 'URL do google maps é obrigatória',
      })
      .trim()
      .url('URL inválida'),
  }),
})

function PharmacyForm({ id, defaultValues }: IPharmacyForm) {
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
    if (!id) {
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
      const result = await editPharmacy({
        pharmacy: {
          id: id ?? '',
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
          title: 'Farmácia editada com sucesso!',
          icon: <CheckIcon size={14} />,
        })
      } else {
        ShowToast({
          title: 'Não foi possível editar a farmácia!',
          icon: <XIcon size={14} />,
        })
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-lg bg-muted p-3"
      >
        <fieldset className="grid gap-3 lg:grid-cols-2">
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

        <fieldset className="grid gap-3 lg:grid-cols-2">
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
          variant="default"
          disabled={form.formState.isSubmitting}
          className="w-full px-3 lg:w-fit lg:self-end"
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
