const Endpoints ={
    AUTH:{
        LOGIN: `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/login`,
        REFRESH: `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/refresh`,
        LOGOUT: `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/logout`,
        PROFILE: `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/profile`
    },
    PUBLIC:{
        CATEGORY: `${process.env.NEXT_PUBLIC_SERVER_URL}/category`,
        PRODUCT: `${process.env.NEXT_PUBLIC_SERVER_URL}/product`
    }
}

export default Endpoints