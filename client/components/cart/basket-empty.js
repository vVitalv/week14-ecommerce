import React from 'react'

import basketNeedEat from '../../assets/images/basket-eat.gif'

const BasketEmpty = () => {
  return (
    <main>
      <div className="basket-empty">
        <img src={basketNeedEat} alt="basket is empty" />
      </div>
    </main>
  )
}

BasketEmpty.propTypes = {}

export default React.memo(BasketEmpty)
