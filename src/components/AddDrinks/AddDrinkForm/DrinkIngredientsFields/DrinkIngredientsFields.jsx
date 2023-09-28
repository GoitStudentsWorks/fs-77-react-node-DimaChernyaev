import { useEffect, useState } from 'react';
import { getIngredients } from '../../../../helpers/API/operationsFilters';

import {
  FormError,
  IngredientsWrapper,
  ControlWrapper,
  Controls,
  ControlsButton,
  ControlMinuse,
  ControlPluse,
  IngredientsWrapperSelect,
  IngredientsTitle,
  IngredientsInput,
  IngredientsSelect,
  IngredientsDelete,
  IngredientsDeleteButton,
} from './DrinkIngredientsFields.styled';

const DrinkIngredientsFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await getIngredients();
        const ingredientOptions = ingredients.map((ingredient) => ({
          label: ingredient.title, // Используйте свойство _id из ингредиента как значение
          value: ingredient.title,
        }));
        setOptions(ingredientOptions);
      } catch (error) {
        console.error('Ошибка при загрузке ингридиента:', error);
      }
    }

 

    fetchIngredients();
  }, []);

const handleSelectChange = (selectedOption, index) => {
  const { value } = selectedOption;
  setFieldValue(`ingredients[${index}].name`, value);
};

  const handleAddIngredient = () => {
    const newIngredient = { name: '' };
    setFieldValue('ingredients', [
      ...values.ingredients,
      newIngredient,
    ]);
  };

const handleRemoveIngredient = (index) => {
  const newIngredients = [...values.ingredients];
  newIngredients.splice(index, 1);
  // Обновляем ингредиенты в формик форме с помощью setFieldValue
  setFieldValue('ingredients', newIngredients);
};

  const isRemoveButtonDisabled = values.ingredients.length === 1;

  return (
    <IngredientsWrapper>
      <ControlWrapper>
        <IngredientsTitle>Ingredients</IngredientsTitle>
        <Controls>
          <ControlsButton
            type="button"
            onClick={() =>
              handleRemoveIngredient(values.ingredients.length - 1)
            }
            disabled={isRemoveButtonDisabled}
          >
            <ControlMinuse></ControlMinuse>
          </ControlsButton>

          <div>{values.ingredients.length}</div>

          <ControlsButton type="button" onClick={handleAddIngredient}>
            <ControlPluse></ControlPluse>
          </ControlsButton>
        </Controls>
      </ControlWrapper>

      {values.ingredients.map((ingredient, index) => (
        <IngredientsWrapperSelect key={index}>
          <IngredientsSelect
            name={`ingredients[${index}].name`}
            options={options}
            value={selectedOptions[index]}
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, index)
            }
            onBlur={handleBlur}
          >
            <option value="">Выберите ингредиент</option>
            {/* Ваши варианты ингредиентов */}
          </IngredientsSelect>

          <IngredientsInput
            type="text"
            name={`ingredients[${index}].amount`}
            placeholder="1 cl"
            value={ingredient.amount || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <IngredientsDeleteButton
            type="button"
            onClick={() => {
              handleRemoveIngredient(index);
            }}
            disabled={isRemoveButtonDisabled}
          >
            <IngredientsDelete></IngredientsDelete>
          </IngredientsDeleteButton>
          {touched.ingredients &&
          errors.ingredients &&
          touched.ingredients[index] &&
          errors.ingredients[index] ? (
            <FormError>{errors.ingredients[index].name}</FormError>
          ) : null}
        </IngredientsWrapperSelect>
      ))}
    </IngredientsWrapper>
  );
};

export default DrinkIngredientsFields;
