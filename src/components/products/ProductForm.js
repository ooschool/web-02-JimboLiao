import { brandNames, productCategory } from "../../data/products";
import { FormSelect, StyledRow, StyledColumn, SearchBar } from "../common";
import { useState } from "react";
const ProductForm = ({
  handleSelectBrand,
  handleSelectCategory,
  handleSearch,
  brandOptions,
  categoryOptions,
}) => {
  return (
    <form>
      <StyledRow>
        <StyledColumn $num={4}>
          <label htmlFor="brand">
            Brand :
            <FormSelect
              name="brand"
              id="brand"
              options={brandOptions}
              onChange={handleSelectBrand}
            />
          </label>
        </StyledColumn>
        <StyledColumn $num={4}>
          <label htmlFor="category">
            Category :
            <FormSelect
              name="category"
              id="category"
              options={categoryOptions}
              onChange={handleSelectCategory}
            />
          </label>
        </StyledColumn>
        <StyledColumn $num={4}>
          <label htmlFor="search">
            Search :
            <SearchBar id="search" name="search" onChange={handleSearch} />
          </label>
        </StyledColumn>
      </StyledRow>
    </form>
  );
};

export { ProductForm };
