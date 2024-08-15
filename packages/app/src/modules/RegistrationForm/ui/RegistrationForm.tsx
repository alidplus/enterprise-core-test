import { Button, Input } from '@nextui-org/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IndividualUserInput, UserInput } from '../../../types/user'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../store/slices/registration'

export default function RegistrationForm() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IndividualUserInput>({ defaultValues: { type: 'individual' } })
  const onSubmit: SubmitHandler<UserInput> = (data) => {
    dispatch(addUser(data))
    reset()
  }

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
