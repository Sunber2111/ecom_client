import {ILoginForm, IResponseLogin, IResponseUser, INewUser,IResponseNewUser} from '../models/account'
import request from './agent'

const accountApi = {
    current : () : Promise<IResponseUser>  => request.get('/auth/user'),
    login : (account : ILoginForm) : Promise<IResponseLogin> => request.post('/auth/login',account),
    register : (newUser: INewUser) : Promise<IResponseNewUser> => request.post('/auth/signup' ,newUser)
}

export default accountApi