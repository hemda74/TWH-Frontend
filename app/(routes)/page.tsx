import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import LocalizationBtn from "@/components/ui/LocalizationBtn";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("192dbb95-cac7-423b-b184-495fde3a8b3f");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <LocalizationBtn />
        <Billboard data={billboard} />
        <h2 data-trans="helloworld"></h2>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
