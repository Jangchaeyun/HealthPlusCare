import z from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "사용자 이름은 최소 2자 이상이어야 합니다.")
    .max(2, "사용자 이름은 최대 50자 이상이어야 합니다."),
  email: z.string().email("이메일 주소 형식이 맞지 않습니다."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+d{10,15}$/.test(phone),
      "핸드폰 번호 형식이 맞지 않습니다."
    ),
});
