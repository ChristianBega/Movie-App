import React, { useContext, useState } from "react";
import { FormInput } from "../../../../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";
import { StyledForm, StyledOption } from "./create-profile-account-form.styles";
import { createProfileAccountDocumentIfAuthenticated } from "../../../../setup/utils/firebase/accountProfiles.firebase";
import { UserContext } from "../../../../setup/contexts/user.context";
import avatarOne from "../../../../assets/profile-avatars/avatars_1.webp";
import avatarTwo from "../../../../assets/profile-avatars/avatars_2.webp";
import avatarThree from "../../../../assets/profile-avatars/avatars_3.webp";
import avatarFour from "../../../../assets/profile-avatars/avatars_4.webp";
import avatarFive from "../../../../assets/profile-avatars/avatars_5.webp";
import avatarSix from "../../../../assets/profile-avatars/avatars_6.webp";
import avatarSeven from "../../../../assets/profile-avatars/avatars_7.webp";

const defaultFormFields = {
  profileName: "",
  colors: "rgba(38, 60, 187, 0.7), rgba(43, 5, 90, 0.8)",
  avatars: avatarSeven,
};
const colorOptions = [
  ["rgba(38, 60, 187, 0.7)", "rgba(43, 5, 90, 0.8)"],
  ["rgba(2, 71, 61, 0.7)", "rgba(37, 137, 87, 0.655)"],
  ["rgba(71, 40, 2, 0.7)", "rgba(137, 37, 37, 0.655)"],
  ["rgba(255, 51, 153, 0.4)", "rgba(255, 136, 0, 0.4)"],
  ["rgba(255, 102, 204, 0.4)", "rgba(0, 230, 230, 0.4)"],
];
const avatarOptions = [avatarOne, avatarTwo, avatarThree, avatarFour, avatarFive, avatarSix, avatarSeven];

export const CreateProfileAccountForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { profileName, colors, avatars } = formFields;
  const { currentUser } = useContext(UserContext);
  console.log(formFields);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      createProfileAccountDocumentIfAuthenticated(currentUser.uid, profileName, colors, avatars);
      resetFormFields();
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <FormInput label="Profile Account Name" type="text" required onChange={handleChange} name="profileName" value={profileName} />

      <FormInput label="Select your profile background colors" type="select" rgba={"true"} name="colors" onChange={handleChange} value={colors}>
        {colorOptions.map((options, index) => {
          const [color1, color2] = options;
          return (
            <StyledOption key={index} value={[color1, color2]}>
              {color1} - {color2}
            </StyledOption>
          );
        })}
      </FormInput>

      <FormInput label="Select your profile avatar" type="select" name="avatars" onChange={handleChange} value={avatars}>
        {avatarOptions.map((options, index) => {
          return (
            <>
              <StyledOption key={index} value={options}>
                {options}
              </StyledOption>
            </>
          );
        })}
      </FormInput>

      <CustomButton type="submit" buttonType={BUTTON_TYPES_CLASSES.form}>
        Submit
      </CustomButton>
    </StyledForm>
  );
};
