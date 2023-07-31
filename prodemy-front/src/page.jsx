import Header from "./page/header";
import Banner from "./page/banner";
import Learn from "./page/learn";
import Categories from "./page/categorypage";
import Footer from "./page/footer";
import Transform from "./page/transform";

function Page() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Categories></Categories>
      <Learn></Learn>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default Page;
