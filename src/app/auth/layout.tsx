export default function Layout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="grid flex-1 auto-rows-auto items-start bg-[url(/white-fabric-texture-background-design-element.jpg)] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
}
