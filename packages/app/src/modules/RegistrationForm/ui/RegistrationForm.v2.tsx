import { Button, Input } from '@nextui-org/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserInput } from '../../../types/user'

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInput>({ defaultValues: { type: 'legal' } })
  const onSubmit: SubmitHandler<UserInput> = (data) =>
    console.log('onSubmit', data)

  return (
    <form
      className="flex max-w-fit flex-col gap-5 p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register('companyName')}
        label="Company Name"
        fullWidth
        placeholder="your Brand"
        color="primary"
        className="max-w-xs"
      />
      <Input
        {...register('email')}
        type="email"
        label="Email"
        placeholder="junior@nextui.org"
        fullWidth
        color="primary"
        className="max-w-xs"
      />
      <Button type="submit" color="primary">
        Submit
      </Button>
    </form>
  )
}
