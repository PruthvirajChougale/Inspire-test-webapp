export function Input({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onRightIconClick,
  rightLabel,
  error,
  id,
  className = '',
  ...props
}) {
  return (
    <div className="form-group">
      {(label || rightLabel) && (
        <div className="label-row">
          {label && <label htmlFor={id}>{label}</label>}
          {rightLabel}
        </div>
      )}

      <div className="input-wrapper">
        {LeftIcon && <LeftIcon className="input-icon left" size={20} />}
        
        <input id={id} className={`input-field ${className}`} {...props} />

        {RightIcon && (
          <button
            type="button"
            className="input-icon-btn right"
            onClick={onRightIconClick}
            tabIndex={-1}
          >
            <RightIcon size={20} />
          </button>
        )}
      </div>

      {error && <span className="error-text">{error}</span>}
    </div>
  );
}