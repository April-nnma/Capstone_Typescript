import z from "zod";

export const RegisterSchema = z.object({
    taiKhoan: z
        .string()
        .nonempty("Vui lòng nhập tài khoản")
        .min(5, "Vui lòng nhập ít nhất 5 ký tự")
        .max(10, "Vui lòng nhập tối đa 10 ký tự"),

    matKhau: z
        .string()
        .nonempty("Vui lòng nhập mật khẩu")
        .regex(
            /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).*$/,
            "Mật khẩu phải chứa ít nhất một ký tự đặc biệt"
        ),

    email: z
        .string()
        .nonempty("Vui lòng nhập email")
        .email("Email không hợp lệ"),
    soDt: z
        .string()
        .nonempty("Vui lòng nhập số điện thoại")
        .regex(/^\d{10}$/, "Số điện thoại không hợp lệ"),
    maNhom: z
        .string()
        .nonempty("Vui lòng nhập mã nhóm"),
    hoTen: z
        .string()
        .nonempty("Vui lòng nhập họ tên"),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
