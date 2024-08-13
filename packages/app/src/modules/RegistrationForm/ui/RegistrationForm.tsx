import { Button, Input } from '@nextui-org/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserInput } from '../../../types/user'

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInput>({ defaultValues: { type: 'individual' } })
  const onSubmit: SubmitHandler<UserInput> = (data) =>
    console.log('onSubmit', data)

  return (
    <form
      className="flex max-w-fit flex-col gap-5 p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register('name')}
        label="Full Name"
        fullWidth
        color="secondary"
        placeholder="John Dow"
        className="max-w-xs"
      />
      <Input
        {...register('email')}
        type="email"
        label="Email"
        color="secondary"
        placeholder="junior@nextui.org"
        fullWidth
        className="max-w-xs"
      />
      <Button type="submit" color="secondary">
        Submit
      </Button>
    </form>
  )
}
