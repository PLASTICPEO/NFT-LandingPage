import { useState } from "react";
import { formTypes } from "../index.types";

export const useSubscribe = () => {
  const [formData, setFormData] = useState<formTypes>({
    email: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      email: "",
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return {
    formData,
    handleSubmit,
    handleChange,
  };
};
