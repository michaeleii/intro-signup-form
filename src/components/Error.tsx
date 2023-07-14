function Error({ message }: { message: string }) {
  return (
    <p className="mt-1 text-right text-sm text-[hsl(0_100%_74%)]">{message}</p>
  );
}
export default Error;
