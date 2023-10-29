import React, { useContext, useState } from "react";
import { FormInput } from "../../../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../components/button/button.component";
import { StyledForm, StyledOption } from "./create-profile-account-form.styles";
import { createProfileAccountDocumentIfAuthenticated } from "../../../../setup/utils/firebase/accountProfiles.firebase";
import { UserContext } from "../../../../setup/contexts/user.context";
const defaultFormFields = {
  profileName: "",
  colors: "",
};
const colorOptions = [
  ["rgba(2, 71, 61, 0.7)", "rgba(37, 137, 87, 0.655)"],
  ["rgba(38, 60, 187, 0.7)", "rgba(43, 5, 90, 0.8)"],
  ["rgba(71, 40, 2, 0.7)", "rgba(137, 37, 37, 0.655)"],
  ["rgba(255, 51, 153, 0.4)", "rgba(255, 136, 0, 0.4)"],
  ["rgba(255, 102, 204, 0.4)", "rgba(0, 230, 230, 0.4)"],
];

export const CreateProfileAccountForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { profileName, colors } = formFields;
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);

    setFormFields({ ...formFields, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(profileName, colors);
      createProfileAccountDocumentIfAuthenticated(currentUser.uid, profileName, colors);
      resetFormFields();
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <FormInput label="Profile Account Name" type="text" required onChange={handleChange} name="profileName" value={profileName} />

      <FormInput label="Select your profile background colors" type="select" name="colors" onChange={handleChange} value={colors}>
        {colorOptions.map((options, index) => {
          const [color1, color2] = options;
          return (
            <StyledOption key={index} value={[color1, color2]}>
              {color1} - {color2}
            </StyledOption>
          );
        })}
      </FormInput>

      <CustomButton buttonType="form" type="submit">
        Submit
      </CustomButton>
    </StyledForm>
  );
};
