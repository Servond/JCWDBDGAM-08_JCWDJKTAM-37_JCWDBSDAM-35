import Wrapper from "./components/wrapper";

import JumbotronSection from "./section/jumbotron";
import BlogPreviewSection from "./section/blog-preview";
export default function HomeView() {
  return (
    <div className="flex flex-col justify-center items-center">
      <JumbotronSection />
      <Wrapper>
        <BlogPreviewSection />
      </Wrapper>
    </div>
  );
}
