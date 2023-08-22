import { FormSelect, StyledRow, StyledColumn, SearchBar } from "../common";

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
          <label htmlFor="brand">Brand : </label>
          <FormSelect
            name="brand"
            id="brand"
            options={brandOptions}
            onChange={handleSelectBrand}
          />
        </StyledColumn>
        <StyledColumn $num={4}>
          <label htmlFor="category">Category : </label>
          <FormSelect
            name="category"
            id="category"
            options={categoryOptions}
            onChange={handleSelectCategory}
          />
        </StyledColumn>
        <StyledColumn $num={4}>
          <label htmlFor="search">Search : </label>
          <SearchBar id="search" name="search" onChange={handleSearch} />
        </StyledColumn>
      </StyledRow>
    </form>
  );
};

export { ProductForm };
