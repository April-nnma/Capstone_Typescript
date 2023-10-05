import { AccountDetail, Tabs } from "components";

export const AccountTemplate = () => {
    return (
        <div>
            <Tabs
                tabPosition="left"
                items={[
                    {
                        key: "accountInfo",
                        label: "Thông tin tài khoản",
                        children: <AccountDetail />,
                    },
                    {
                        key: "accountBookingHistory",
                        label: "Lịch sử đặt vé",
                        children: <p>Lịch sử đặt vé</p>,
                    },
                ]}
            />
            {/* <Tabs
                tabPosition="left"
                items={[
                    {
                        key: "accountInfo",
                        label: "Thông tin tài khoản",
                        children: <p>thông tin của tài khoản</p>,
                    },
                ]}
            /> */}
        </div>
    );
};
