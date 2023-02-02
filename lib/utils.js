export const fetchData = async (url) => {
  try {
    const res = await fetch(url,{ next: { revalidate: 60 } });
    const data= await res.json();/* Axios promise'den hep hata verdi.getstaticprops ile çalışmıyor... */
    return data;
  } catch (err) {
    console.log(err);
  }
};

