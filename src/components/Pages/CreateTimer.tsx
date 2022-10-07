import React from "react";
import { Heading, Flex, Input } from "@chakra-ui/react";
import { FieldValues, useForm, Controller } from "react-hook-form";

import Clock from "../Clock";

const CreateTimer = () => {
  type FormData = {
    title: string;
    time: string;
  };
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Flex
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Heading>Create Timer</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Title" {...register("title")} />
        <Input type="time" {...register("time")} />
        <input type="submit" />
      </form>
    </Flex>
  );
};

export default CreateTimer;
