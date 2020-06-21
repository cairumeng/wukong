import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios'
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete'
import debounce from 'lodash/debounce'
import AsyncSelect from 'react-select/async'
import 'react-google-places-autocomplete/dist/index.min.css'

class AddressForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      cityId: -1,
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      lat: '',
      lng: '',
    }
    this.loadOptions = debounce(this.loadOptions, 250)
  }

  onGetSearchKeyHandler = (searchKey) => {
    return searchKey
  }

  onSelectCityHandler = (newValue) => {
    if (newValue) {
      this.setState({
        cityId: newValue.value,
        searchKey: newValue.label,
      })
    }
  }

  loadOptions = (searchKey, callback) => {
    if (!searchKey || searchKey.length <= 2) {
      callback([])
    } else {
      axios
        .get(`/address/cities?q=${searchKey}`)
        .then((cities) => {
          callback(cities)
        })
        .catch((err) => {
          console.log(err, 'catch the error')
        })
    }
  }

  handleSelectAddress = (address) => {
    geocodeByAddress(address.description)
      .then((results) => {
        getLatLng(results[0]).then((location) =>
          this.setState({
            lat: location.lat,
            lng: location.lng,
            address: address.structured_formatting.main_text,
          })
        )
      })
      .then((latLng) => console.log('Success', latLng))
      .catch((error) => console.error('Error', error))
  }

  onSearchChange = (searchKey) => {
    this.setState({ searchKey })
    this.fetchCities(searchKey)
  }

  onSubmitHandler = () => {
    axios.post('/address', {
      cityId: this.state.cityId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      address: this.state.address,
      lng: this.state.lng,
      lat: this.state.lat,
    })
  }

  render() {
    return (
      <div className="white-box mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3>添加新收获地址</h3>
          </div>
        </div>

        <div className="form-group mt-3">
          <div className="row">
            <label className="control-label col-md-3 text-right">
              First Name*
            </label>
            <div className="col-md-6">
              <input
                className="form-control"
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="row">
            <label className="control-label col-md-3 text-right">
              Last Name*
            </label>
            <div className="col-md-6">
              <input
                className="form-control"
                onChange={(e) => this.setState({ lastName: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="row">
            <label className="control-label col-md-3 text-right">Phone*</label>
            <div className="col-md-6">
              <input
                className=" form-control"
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="row">
            <label className="control-label col-md-3 text-right">Country</label>
            <div className="col-md-6">
              <select
                name="country_id"
                required="required"
                className="form-control"
              >
                <option value="1">France</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="row">
            <label className="control-label col-md-3 text-right">City*</label>
            <div className="col-md-6">
              <AsyncSelect
                isClearable
                cacheOptions
                onInputChange={this.onGetSearchKeyHandler}
                onChange={this.onSelectCityHandler}
                loadOptions={this.loadOptions}
                debounce={400}
                defaultOptions={false}
                placeholder={'Type postal code or ville name'}
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="row">
            <label className="control-label col-md-3 text-right">
              Address*
            </label>

            <div className="col-md-6">
              <GooglePlacesAutocomplete
                inputClassName="form-control"
                autocompletionRequest={{
                  componentRestrictions: {
                    country: 'fr',
                  },
                }}
                onSelect={this.handleSelectAddress}
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 offset-3">
            <Link to="/address">
              <button
                className="btn btn-success btn-block"
                onClick={this.onSubmitHandler}
              >
                添加
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AddressForm
