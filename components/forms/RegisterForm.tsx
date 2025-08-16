"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Doctors, GenderOptions } from "@/constants";
import { Label } from "@radix-ui/react-label";
import { SelectItem } from "../ui/select";
import Image from "next/image";

const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
      const userData = { name, email, phone };
      const user = await createUser(userData);
      if (user) router.push(`/patients/${user.$id}/register`);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className="space-y-4">
          <h1 className="header">어서오세요 👋</h1>
          <p className="text-dark-700">귀하에 대해 더 자세히 알려주세요.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">개인 정보</h2>
          </div>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          placeholder="사용자 이름"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="이메일"
            placeholder="healthpluscare@mail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="핸드폰"
            placeholder="(010) 1234-5678"
          />
        </div>

        <div className="flex fkex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label="생일"
          />

          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="성별"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <div className="flex fkex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="address"
            label="주소"
            placeholder="주소"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="occupation"
            label="직업"
            placeholder="소프트웨어 엔지니어"
          />
        </div>
        <div className="flex fkex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="emergencyContactName"
            label="비상 연락처 이름"
            placeholder="보호자 이름"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="emergencyContactNumber"
            label="비상연락처"
            placeholder="(010) 1234-5678"
          />
        </div>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">의료 정보</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="primaryPhysician"
          label="주치의"
          placeholder="주치의를 선택해주세요"
        >
          {Doctors.map((doctor) => (
            <SelectItem key={doctor.name} value={doctor.name}>
              <div className="flex cursor-pointer items-center gap-2">
                <Image
                  src={doctor.image}
                  width={32}
                  height={32}
                  alt={doctor.name}
                  className="rounded-full border-dark-500"
                />
                <p>{doctor.name}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>
        <div className="flex fkex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="insuranceProvider"
            label="보험 제공자"
            placeholder="삼성화재"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="insurancePolicyNumber"
            label="보험증권번호"
            placeholder="ABC123456789"
          />
        </div>
        <div className="flex fkex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="allergies"
            label="알레르기(있는 경우)"
            placeholder="견과류"
          />

          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="currentMedication"
            label="현재 먹는 약(있는 경우)"
            placeholder="이부프로펜"
          />
        </div>
        <SubmitButton isLoading={isLoading}>시작하기</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
