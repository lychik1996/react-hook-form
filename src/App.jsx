import { Controller, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';

const options = [
  {
    value: 'ukraine',
    label: 'ukraine',
  },
  {
    value: 'usa',
    label: 'usa',
  },
  {
    value: 'japan',
    label: 'japan',
  },
  {
    value: 'franche',
    label: 'franche',
  },
];
const getValue = (value) => {
  value ? options.find((option) => option.value === value) : '';
};
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: 'Name is require fill',
          })}
          placeholder="Name"
          type="text"
        />
        {errors?.name && (
          <div style={{ color: 'red' }}>{errors.name.message}</div>
        )}
        <input
          {...register('email', {
            required: 'Email is require fill',
            pattern: {
              value:
                /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
              message: 'Pls enter valid email!',
            },
          })}
          placeholder="Email"
          type="email"
        />
        {errors?.email && (
          <div style={{ color: 'red' }}>{errors.email.message}</div>
        )}
        <Controller
          control={control}
          name="address.country"
          rules={{
            required: 'Country is require!',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <ReactSelect
                options={options}
                placeholder="Countries"
                value={getValue(value)}
                onChange={(newValue)=>onChange(newValue.value)}
              />
              {error && <div style={{ color: 'red' }}>{error.message}</div>}
            </>
          )}
        />
        <input
          {...register('house', {
            required: 'house is require fill',
          })}
          placeholder="House"
          type="text"
        />
        {errors?.house && (
          <div style={{ color: 'red' }}>{errors.house.message}</div>
        )}
        <input
          {...register('city', {
            required: 'City is require fill',
          })}
          placeholder="City"
          type="text"
        />
        {errors?.city && (
          <div style={{ color: 'red' }}>{errors.city.message}</div>
        )}
        <input
          {...register('street', {
            required: 'Street is require fill',
          })}
          placeholder="Street"
          type="text"
        />
        {errors?.street && (
          <div style={{ color: 'red' }}>{errors.street.message}</div>
        )}

        <div>
          <button>Send</button>
        </div>
      </form>
      {/* <div>
        <button
          onClick={() => {
            setValue('name', 'vitaliy');
            setValue('email', 'test@gmail.com');
          }}
        >
          Fill data
        </button>
      </div> */}
    </>
  );
}

export default App;
