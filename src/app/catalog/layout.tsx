import { CartProvider } from '@/contexts/cart-context';
import { TopToolbar } from '@/components/catalog/top-toolbar';
import { Header } from '@/components/shared/header';

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <TopToolbar />
        <main className="flex-grow container mx-auto px-4">
          {children}
        </main>
      </div>
    </CartProvider>
  );
}
