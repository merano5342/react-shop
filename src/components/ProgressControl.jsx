const ProgressControl = () => {
  return (
    <section className="progress-control col col-12 ">
      <div className="d-flex justify-content-between">
        <button className="btn px-5 py-2" type="button">
          {/* <svg className="cursor-point">
          <use xlinkHref="#svg-icon-left-arrow" />
        </svg> */}
          上一步
        </button>
        <button className="btn btn-primary px-5 py-2" type="button">
          下一步
          {/* <svg className="cursor-point">
          <use xlinkHref="#svg-icon-right-arrow" />
        </svg> */}
        </button>
      </div>
    </section>
  );
};

export default ProgressControl;
