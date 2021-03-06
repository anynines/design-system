import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DefaultComponentProps } from '@types'
import { formatPoints } from '../../../helpers'

// C O M P O N E N T S
import { Button } from '../../atoms/Button/Button'
import { Card } from '../Card/Card'
import { Icon } from '../../atoms/Icon/Icon'
import { Label } from '../../atoms/Label/Label'

export interface ProductCardProps extends DefaultComponentProps {
  addToCartWording?: string
  category?: string
  deliveryDays?: number
  description?: string
  id: string
  imageUrl: string
  onAddToCartClick?: () => void
  onWishlistClick?: () => void
  productLink?: string
  points: number
  tags: string
  title: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  addToCartWording = 'Add to Cart',
  className,
  imageUrl,
  onAddToCartClick,
  onWishlistClick,
  productLink = '/shop/product',
  points,
  style,
  title
}) => {
  return (
    <StyledProductCard className={className} style={style}>
      <NavLink to={productLink}>
        <Card>
          <div
            className='product-card--header'
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <Icon icon='sale' size='sm' />
          </div>
          <div className='product-card--content'>
            <h4>{title}</h4>
            <Label className='primary'>
              <Icon icon='points' />
              <span>{formatPoints(points)}</span>
            </Label>
          </div>
          <div className='product-card--buttons'>
            <Button
              size='sm'
              type='transparent'
              onClick={(): void => { return (onWishlistClick && onWishlistClick()) }}
              iconOnly
            >
              <Icon icon='heart' />
            </Button>
            <Button
              size='sm'
              type='primary'
              width='block'
              onClick={(): void => { return (onAddToCartClick && onAddToCartClick()) }}
            >
              <Icon icon='cart' />
              <>{addToCartWording}</>
            </Button>
          </div>
        </Card>
      </NavLink>
    </StyledProductCard>
  )
}

const StyledProductCard = styled.div`
  margin-right: 20px;

  a {
    text-decoration: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 200px;
    height: 100%;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .product-card--header {
    position: relative;
    margin: -20px -20px 15px;
    background-color: var(--color-black-50);
    background-position: center;
    height: 140px;
    background-size: cover;

    i {
      position: absolute;
      bottom: 20px;
      left: 20px;
      background: var(--color-primary);
      padding: 4px;
      height: 20px;
      max-height: auto;
      color: var(--color-white);
      border-radius: 4px;
      max-width: auto;
    }
  }

  .product-card--content {
    flex: 1;
    color: var(--color-white);

    .primary {
      margin-left: 0;
      font-size: var(--text-sm);
    }
  }

  .product-card--buttons {
    display: flex;
    margin: 15px 0;

    .btn {
      margin: 0 10px;
    }
  }
`
