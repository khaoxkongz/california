export default function Layout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="flex min-h-dvh flex-1 flex-col bg-[url('/white-fabric-texture-background-design-element.png')] bg-no-repeat">
      {children}
    </div>
  );
}
