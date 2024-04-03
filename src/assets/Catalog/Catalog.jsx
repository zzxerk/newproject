import './Catalog.css'
import Item from './Item/Item'

export default function Catalog() {
    return (
        <div className="catalog__inner">
            <p className='catalog__title'>Каталог</p>
            <div className="catalog__body">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}