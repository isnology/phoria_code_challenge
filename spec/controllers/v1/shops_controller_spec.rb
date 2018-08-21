require 'rails_helper'

RSpec.describe V1::ShopsController, type: :controller do
  #include Devise::Test::IntegrationHelpers

  describe 'GET #index' do
    
    before :all do
      create_list(:item, 3)
      create(:tax)
      create_list(:promotion, 3)
    end
   
    before :each do
      get :index
    end
    
    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end
    
    it 'response with JSON body containing expected Shop attributes' do
      expect(response.body).to look_like_json
      expect(json.keys).to match_array(['shop'])
      expect(json['shop'].keys).to match_array(%w(items tax promotions))
      expect(json['shop']['items'][0].keys).to match_array(%w(id name quality price_cents image))
      expect(json['shop']['tax'].keys).to match_array(%w(id category rate))
      expect(json['shop']['promotions'][0].keys).to match_array(%w(id quantity discount shipping_cents))
    end
  end

end
