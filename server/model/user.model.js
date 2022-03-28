import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      validate: {
        validator: (v) => {
          return /.+@.+\..+/i.test(v)
        },
        message: (props) => `${props.value} is not a valid email!`
      }
    },
    role: {
      type: [String],
      default: ['user']
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamp: true
  }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  const salt = 10
  this.password = bcrypt.hashSync(this.password, salt)

  return next()
})

userSchema.method({
  passwordMatches(password) {
    return bcrypt.compareSync(password, this.password)
  }
})

userSchema.statics = {
  async findAndValidateUser({ email, password }) {
    if (!email) {
      throw new Error('Email is required')
    }
    if (!password) {
      throw new Error('Password is required')
    }

    const user = await this.findOne({ email }).exec()
    if (!user) {
      throw new Error('User not found')
    }

    const isPasswordOk = await user.passwordMatches(password)

    if (!isPasswordOk) {
      throw new Error('Wrong password')
    }

    return user
  }
}

export default mongoose.model('users', userSchema)
