type IProps = {
    status?: (string | boolean)[],

}

const Demo = ({status}: IProps) => {
  return (
    <div>{typeof status == 'string' ? status : status ? 'true' : 'false'}</div>
  )
}

export default Demo