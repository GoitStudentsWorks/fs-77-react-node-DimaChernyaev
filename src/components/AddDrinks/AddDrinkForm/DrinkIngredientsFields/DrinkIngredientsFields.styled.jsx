import styled from 'styled-components';
import { colorStyled } from '../../../../helpers/colorStyled';
import { ReactComponent as PlusSVG } from '../../../../assets/AddDrink/PlusForm.svg';
import { ReactComponent as MinuseSVG } from '../../../../assets/AddDrink/MinusForm.svg';
import { ReactComponent as DeleteSVG } from '../../../../assets/AddDrink/X.svg';
import Select from 'react-select';

export const FormError = styled.div`
  flex-basis: 100%;
  font-size: 12px;
  color: #da1414;
  line-height: 14px;
  margin-top: 4px;
  padding-left: 20px;
  margin-top: 8px;
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 80px;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    width: 540px;
  }
`;
export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;
export const IngredientsTitle = styled.h3`
  font-size: 28px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${colorStyled.colorWhiteFifty};
`;

export const ControlMinuse = styled(MinuseSVG)`
  stroke: ${colorStyled.colorWhite};
`;

export const ControlsButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${ControlMinuse} {
    stroke: ${colorStyled.colorWhiteFifty};
  }
`;

export const IngredientsWrapperSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 14px;
    justify-content: flex-start;
  }
`;

export const IngredientsSelect = ({ options, ...props }) => {
  return (
    <Select
      {...props}
      options={options}
      styles={{
        container: (provided) => ({
          ...provided,
          minWidth: '140px',
          '@media (min-width: 375px)': {
            minWidth: '200px',
          },
          '@media (min-width: 768px)': {
            minWidth: '332px',
          },
        }),

        control: (provided, state) => ({
          ...provided,
          height: 'auto',
          padding: '6px 16px',
          backgroundColor: 'transparent',
          border: state.isFocused
            ? `1px solid ${colorStyled.colorWhite}`
            : `1px solid ${colorStyled.colorWhiteFifty}`,
          boxShadow: state.isFocused ? 'none' : 'none',
          borderRadius: '200px',
          '&:hover': {
            borderColor: `${colorStyled.colorWhite}`,
          },
          '@media (min-width: 768px)': {
            padding: '9px 19px',
          },
        }),
        placeholder: (provided, state) => ({
          ...provided,
          margin: 0,
          color: state.isFocused
            ? `${colorStyled.colorWhite}`
            : `${colorStyled.colorWhiteFifty}`,
        }),
        option: (provided) => ({
          ...provided,
          padding: '14px',
          color: `${colorStyled.colorWhiteFifty}`,
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover': {
            color: `${colorStyled.colorWhite}`,
          },
        }),
        input: (provided) => ({
          ...provided,
          padding: 0,
          margin: 0,
          border: 'none',
          color: `${colorStyled.colorWhite}`,
        }),
        menu: (provided) => ({
          ...provided,
          padding: '14px',
          background: '#161F37',
          borderRadius: '20px',
          overflow: 'hidden',
        }),
        menuList: (provided) => ({
          ...provided,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: 'none',
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: state.isFocused
            ? `${colorStyled.colorWhiteFifty}`
            : `${colorStyled.colorWhite}`,
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: 0,
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
        }),
      }}
    />
  );
};

export const IngredientsDeleteButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  background: transparent;
  border: none;
  &:disabled ${ControlMinuse} {
    stroke: ${colorStyled.colorWhiteFifty};
  }
  @media (min-width: 375px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

export const ControlPluse = styled(PlusSVG)`
  stroke: ${colorStyled.colorWhite};
`;
export const IngredientsDelete = styled(DeleteSVG)`
  stroke: ${colorStyled.colorWhiteFifty};
  &:hover {
    stroke: ${colorStyled.colorWhite};
  }
`;
export const IngredientsInput = styled.input`
  width: 100px;
  padding: 15px 24px;

  font-size: 14px;
  line-height: 18px;
  color: ${colorStyled.colorWhiteFifty};
  background-color: transparent;

  border-radius: 200px;
  border: 1px rgba(243, 243, 243, 0.5) solid;
  box-sizing: border-box;
  &:hover {
    border-color: ${colorStyled.colorWhite};
  }
  &:focus {
    color: ${colorStyled.colorWhite};
  }
  @media (min-width: 768px) {
    min-width: 150px;
    padding: 18px 24px;
  }
`;
