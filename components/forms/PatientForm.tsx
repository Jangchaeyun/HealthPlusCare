"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";

export enum FormFieldType {
  INPUT = "input",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "사용자 이름은 최소 2자 이상이어야 합니다.",
  }),
});

const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-t-4">
          <h1 className="header">안녕하세요 👋</h1>
          <p className="text-dark-700">첫 번째 스케줄을 예약하세요.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
        />
        <Button type="submit">전송</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
