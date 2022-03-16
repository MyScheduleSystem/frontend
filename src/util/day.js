export const getDay = () => new Date().getDate();
export const getMonth = () => new Date().getMonth() + 1;
export const getFullYear = () => new Date().getFullYear();
export const getDate = (year, month) => new Date(year, month, 0);

export const DAY = ['일', '월', '화', '수', '목', '금', '토'];