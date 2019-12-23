import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-suede/26/D12-2751-026/D12-2751-026_detalhe1.jpg?ims=240x240"
          alt="Tênis Nike"
        />
        <strong>Tênis Nike Court Royale</strong>
        <span>R$ 149,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-suede/26/D12-2751-026/D12-2751-026_detalhe1.jpg?ims=240x240"
          alt="Tênis Nike"
        />
        <strong>Tênis Nike Court Royale</strong>
        <span>R$ 149,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-suede/26/D12-2751-026/D12-2751-026_detalhe1.jpg?ims=240x240"
          alt="Tênis Nike"
        />
        <strong>Tênis Nike Court Royale</strong>
        <span>R$ 149,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-suede/26/D12-2751-026/D12-2751-026_detalhe1.jpg?ims=240x240"
          alt="Tênis Nike"
        />
        <strong>Tênis Nike Court Royale</strong>
        <span>R$ 149,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-suede/26/D12-2751-026/D12-2751-026_detalhe1.jpg?ims=240x240"
          alt="Tênis Nike"
        />
        <strong>Tênis Nike Court Royale</strong>
        <span>R$ 149,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-royale-suede/26/D12-2751-026/D12-2751-026_detalhe1.jpg?ims=240x240"
          alt="Tênis Nike"
        />
        <strong>Tênis Nike Court Royale</strong>
        <span>R$ 149,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
