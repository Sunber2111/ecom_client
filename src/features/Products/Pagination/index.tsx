import productApi from 'app/api/product'
import { history } from 'index'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Pagination, PaginationProps } from 'semantic-ui-react'

interface IProps{
    pageActive : number,
}
 
export const PaginationPage: React.FC<IProps> = ({pageActive}) => {
    
    const history = useHistory()
    const [totalPage, setTotalPage] = useState(0)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        productApi.getTotalPage().then((data)=>{
            setTotalPage(data.totalPage)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])
    const handleChange = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) =>{

        history.push(`/products?page=${data.activePage}`)
    }
    if(loading)
    return (<div> Loading Pagination.. </div>)
    return (
        <Pagination onPageChange={handleChange} activePage={pageActive} totalPages={totalPage}/>
    )
}
