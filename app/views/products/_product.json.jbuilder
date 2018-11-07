json.extract! product, :id, :nombre, :status, :categoria, :created_at, :updated_at
json.url product_url(product, format: :json)
