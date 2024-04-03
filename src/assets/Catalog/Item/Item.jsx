import './Item.css'

export default function Item() {
    return (
        <div className="catalog__item">
            <img className='item__img' src={'https://mir-kubikov.ru/upload/resize_cache/iblock/996/746_580_140cd750bba9870f18aada2478b24840a/996e860bd8642fea0883a1cf55a68697.jpg'} alt="" />
            <p className='item__title'>Ferrari Daytona SP3</p>
            <p className='item__price'>62 999 ₽</p>
            <button className='item__btn'>В корзину</button>
        </div>
    )
}
