import { Grid } from "@mui/material";
import { FormSelect, SearchBar } from "../common";
import styled from "styled-components";

const StyledForm = styled.form`
  padding-bottom: 16px;
`;

const ProductForm = ({
  handleSelectBrand,
  handleSelectCategory,
  handleSearch,
  brandOptions,
  categoryOptions,
}) => {
  return (
    <StyledForm>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item xs={12} md={4}>
          <label htmlFor="brand">Brand : </label>
          <FormSelect
            name="brand"
            id="brand"
            options={brandOptions}
            onChange={handleSelectBrand}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <label htmlFor="category">Category : </label>
          <FormSelect
            name="category"
            id="category"
            options={categoryOptions}
            onChange={handleSelectCategory}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <label htmlFor="search">Search : </label>
          <SearchBar id="search" name="search" onChange={handleSearch} />
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export { ProductForm };
