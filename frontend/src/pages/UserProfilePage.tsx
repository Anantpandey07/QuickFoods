import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi'
import { UserProfileForm } from '@/form/user-profile-form/UserProfile'

export default function UserProfilePage() {

  const {currentUser, isLoading: isGetLoading} = useGetMyUser();

  const {updateUser, isLoading: isUpdateLoading} = useUpdateMyUser();

  if(isGetLoading){
    return <span>Loading...</span>
  }
  return (
    <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading}></UserProfileForm>
  )
}
