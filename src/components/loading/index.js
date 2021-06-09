import { Spinner, LockBody, Picture, ReleaseBody } from './styled/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
