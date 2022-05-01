import Education from './education'

type User = {
    name: string,
    email?: string,
    created_at?: Date,
    updated_at?: Date,
    educations?: [Education]
}

export default User