import { MainLayout } from "@app/components/layout/MainLayout";
import { Tweets } from "@app/features/tweets";

export const MainRoute = () => (
    <MainLayout>
      <Tweets />
    </MainLayout>
);
