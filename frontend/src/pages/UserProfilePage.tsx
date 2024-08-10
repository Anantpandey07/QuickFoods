import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi'
import { UserProfileForm } from '@/form/user-profile-form/UserProfile'

export default function UserProfilePage() {

  const {currentUser, isLoading: isGetLoading} = useGetMyUser();

  const {updateUser, isLoading: isUpdateLoading} = useUpdateMyUser();

  if(isGetLoading){
    return <span>Loading...</span>
  }

  if(!currentUser){
    return <span>Unable to Load user Profile</span>
  }
  return (
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}></UserProfileForm>
  )
}
