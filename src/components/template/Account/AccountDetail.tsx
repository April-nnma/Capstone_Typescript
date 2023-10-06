import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AccountSchema, AccountSchemaType } from "schema";
import { putUpdateInfoThunk, useAppDispatch } from "store";

import styled from "styled-components";
import { UpdateUser } from "types";

export const AccountDetail = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AccountSchemaType>({
    resolver: zodResolver(AccountSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
    const { taiKhoan, matKhau, email, soDt, maNhom, hoTen } = value;
    const updateData: UpdateUser = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung: "KhachHang",
      hoTen,
    };

    dispatch(putUpdateInfoThunk(updateData))
      .unwrap()
      .then(() => {
        toast.success("Cập nhật thành công!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    reset({ ...user, soDt: user?.soDT });
  }, [reset, user]);

  return (
    <FormS>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-20 font-600">Thông tin tài khoản</p>
        <Input
          label="Tài Khoản"
          id="taiKhoan"
          placeholder="Tài khoản"
          name="taiKhoan"
          register={register}
          errors={errors?.taiKhoan?.message}
        />
        <Input
          label="Họ và tên"
          id="hoTen"
          placeholder="Họ và tên"
          name="hoTen"
          register={register}
          errors={errors?.hoTen?.message}
        />
        <Input
          label="Email"
          id="email"
          placeholder="Email"
          name="email"
          register={register}
          errors={errors?.email?.message}
        />
        <Input
          label="Điện thoại"
          id="soDt"
          placeholder="Điện thoại"
          name="soDt"
          register={register}
          errors={errors?.soDt?.message}
        />
        <Input
          label="Mã nhóm"
          id="maNhom"
          placeholder="Mã nhóm"
          name="maNhom"
          register={register}
          errors={errors?.maNhom?.message}
        />
        <Input
          label="Mã loại người dùng"
          id="maLoaiNguoiDung"
          placeholder="Mã loại người dùng"
          name="maLoaiNguoiDung"
          register={register}
          errors={errors?.maLoaiNguoiDung?.message}
        />
        <div className="text-right mt-20">
          <Button htmlType="submit" type="primary">
            Lưu chỉnh sửa
          </Button>
        </div>
      </form>
    </FormS>
  );
};

const FormS = styled.header`
  padding: 20px 20px 5px;
  width: 100%;
  div {
    label {
      display: block;
      font-weight: 600;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 2px;
      box-sizing: border-box;
    }
  }
`;
